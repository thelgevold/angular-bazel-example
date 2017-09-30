
import { Cmp5208Component } from './cmp';
describe('Cmp5208Component', () => {
  it('should add', () => {
    expect(new Cmp5208Component().add5208(1)).toBe(5209);
  });
});