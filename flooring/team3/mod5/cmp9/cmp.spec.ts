
import { Cmp5359Component } from './cmp';
describe('Cmp5359Component', () => {
  it('should add', () => {
    expect(new Cmp5359Component().add5359(1)).toBe(5360);
  });
});