
import { Cmp6545Component } from './cmp';
describe('Cmp6545Component', () => {
  it('should add', () => {
    expect(new Cmp6545Component().add6545(1)).toBe(6546);
  });
});