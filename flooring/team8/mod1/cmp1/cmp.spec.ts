
import { Cmp5811Component } from './cmp';
describe('Cmp5811Component', () => {
  it('should add', () => {
    expect(new Cmp5811Component().add5811(1)).toBe(5812);
  });
});