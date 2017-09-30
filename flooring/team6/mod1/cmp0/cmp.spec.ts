
import { Cmp5610Component } from './cmp';
describe('Cmp5610Component', () => {
  it('should add', () => {
    expect(new Cmp5610Component().add5610(1)).toBe(5611);
  });
});