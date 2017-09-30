
import { Cmp5645Component } from './cmp';
describe('Cmp5645Component', () => {
  it('should add', () => {
    expect(new Cmp5645Component().add5645(1)).toBe(5646);
  });
});