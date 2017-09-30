
import { Cmp5461Component } from './cmp';
describe('Cmp5461Component', () => {
  it('should add', () => {
    expect(new Cmp5461Component().add5461(1)).toBe(5462);
  });
});