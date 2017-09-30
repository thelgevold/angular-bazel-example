
import { Cmp6879Component } from './cmp';
describe('Cmp6879Component', () => {
  it('should add', () => {
    expect(new Cmp6879Component().add6879(1)).toBe(6880);
  });
});