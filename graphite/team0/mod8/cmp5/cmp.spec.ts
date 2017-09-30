
import { Cmp6085Component } from './cmp';
describe('Cmp6085Component', () => {
  it('should add', () => {
    expect(new Cmp6085Component().add6085(1)).toBe(6086);
  });
});