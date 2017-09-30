
import { Cmp5024Component } from './cmp';
describe('Cmp5024Component', () => {
  it('should add', () => {
    expect(new Cmp5024Component().add5024(1)).toBe(5025);
  });
});