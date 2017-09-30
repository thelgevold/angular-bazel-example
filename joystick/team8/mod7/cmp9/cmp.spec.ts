
import { Cmp9879Component } from './cmp';
describe('Cmp9879Component', () => {
  it('should add', () => {
    expect(new Cmp9879Component().add9879(1)).toBe(9880);
  });
});