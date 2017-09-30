
import { Cmp4879Component } from './cmp';
describe('Cmp4879Component', () => {
  it('should add', () => {
    expect(new Cmp4879Component().add4879(1)).toBe(4880);
  });
});