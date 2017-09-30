
import { Cmp5999Component } from './cmp';
describe('Cmp5999Component', () => {
  it('should add', () => {
    expect(new Cmp5999Component().add5999(1)).toBe(6000);
  });
});