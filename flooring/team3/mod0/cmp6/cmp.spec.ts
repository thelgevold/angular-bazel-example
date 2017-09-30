
import { Cmp5306Component } from './cmp';
describe('Cmp5306Component', () => {
  it('should add', () => {
    expect(new Cmp5306Component().add5306(1)).toBe(5307);
  });
});