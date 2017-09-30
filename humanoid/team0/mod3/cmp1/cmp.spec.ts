
import { Cmp7031Component } from './cmp';
describe('Cmp7031Component', () => {
  it('should add', () => {
    expect(new Cmp7031Component().add7031(1)).toBe(7032);
  });
});