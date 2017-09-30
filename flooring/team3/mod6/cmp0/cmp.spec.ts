
import { Cmp5360Component } from './cmp';
describe('Cmp5360Component', () => {
  it('should add', () => {
    expect(new Cmp5360Component().add5360(1)).toBe(5361);
  });
});