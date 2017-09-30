
import { Cmp9135Component } from './cmp';
describe('Cmp9135Component', () => {
  it('should add', () => {
    expect(new Cmp9135Component().add9135(1)).toBe(9136);
  });
});