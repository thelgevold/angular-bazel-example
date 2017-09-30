
import { Cmp9068Component } from './cmp';
describe('Cmp9068Component', () => {
  it('should add', () => {
    expect(new Cmp9068Component().add9068(1)).toBe(9069);
  });
});