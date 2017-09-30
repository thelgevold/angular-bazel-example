
import { Cmp3879Component } from './cmp';
describe('Cmp3879Component', () => {
  it('should add', () => {
    expect(new Cmp3879Component().add3879(1)).toBe(3880);
  });
});