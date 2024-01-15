import { screen, act, waitFor } from "@testing-library/react";
import { useDialog } from "./use-dialog"

describe('useDialog', () => {

  const dialog = useDialog();
  const props = {
    title: 'My Title',
    message: 'My Message'
  }

  it('should return true if ok', async () => {
    act(() => {
      const response: Promise<boolean> = dialog(props);
      
      const ok = screen.getByText('Ok');
      
      
      waitFor(() => ok.click());
    
      expect(response).resolves.toBe(true);
    });
  })

  it('should return false if cancel', async () => {
    act(() => {
      const response: Promise<boolean> = dialog(props);
      
      const cancel = screen.getByText('Cancel');
      cancel.click();
      
      expect(response).resolves.toBe(false);
    });
  })

  it('should render a dialog', () => {
    
    act(() => {
      dialog(props);
    });

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.message)).toBeInTheDocument();
    expect(screen.getByText('Ok')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  })
})