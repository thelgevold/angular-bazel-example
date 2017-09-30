
import { Cmp5674Component } from './cmp';
describe('Cmp5674Component', () => {
  it('should add', () => {
    expect(new Cmp5674Component().add5674(1)).toBe(5675);
  });
});