
import { Cmp7879Component } from './cmp';
describe('Cmp7879Component', () => {
  it('should add', () => {
    expect(new Cmp7879Component().add7879(1)).toBe(7880);
  });
});