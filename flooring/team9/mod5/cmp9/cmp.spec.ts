
import { Cmp5959Component } from './cmp';
describe('Cmp5959Component', () => {
  it('should add', () => {
    expect(new Cmp5959Component().add5959(1)).toBe(5960);
  });
});