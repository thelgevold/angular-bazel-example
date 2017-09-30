
import { Cmp6482Component } from './cmp';
describe('Cmp6482Component', () => {
  it('should add', () => {
    expect(new Cmp6482Component().add6482(1)).toBe(6483);
  });
});