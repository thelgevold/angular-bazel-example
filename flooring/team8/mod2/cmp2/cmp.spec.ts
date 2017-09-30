
import { Cmp5822Component } from './cmp';
describe('Cmp5822Component', () => {
  it('should add', () => {
    expect(new Cmp5822Component().add5822(1)).toBe(5823);
  });
});