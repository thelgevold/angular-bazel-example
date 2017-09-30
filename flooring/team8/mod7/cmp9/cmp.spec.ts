
import { Cmp5879Component } from './cmp';
describe('Cmp5879Component', () => {
  it('should add', () => {
    expect(new Cmp5879Component().add5879(1)).toBe(5880);
  });
});