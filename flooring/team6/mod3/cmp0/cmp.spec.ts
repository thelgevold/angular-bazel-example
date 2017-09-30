
import { Cmp5630Component } from './cmp';
describe('Cmp5630Component', () => {
  it('should add', () => {
    expect(new Cmp5630Component().add5630(1)).toBe(5631);
  });
});