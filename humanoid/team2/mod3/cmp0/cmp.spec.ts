
import { Cmp7230Component } from './cmp';
describe('Cmp7230Component', () => {
  it('should add', () => {
    expect(new Cmp7230Component().add7230(1)).toBe(7231);
  });
});