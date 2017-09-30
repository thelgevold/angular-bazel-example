
import { Cmp5704Component } from './cmp';
describe('Cmp5704Component', () => {
  it('should add', () => {
    expect(new Cmp5704Component().add5704(1)).toBe(5705);
  });
});