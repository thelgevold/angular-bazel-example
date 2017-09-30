
import { Cmp9899Component } from './cmp';
describe('Cmp9899Component', () => {
  it('should add', () => {
    expect(new Cmp9899Component().add9899(1)).toBe(9900);
  });
});