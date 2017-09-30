
import { Cmp9674Component } from './cmp';
describe('Cmp9674Component', () => {
  it('should add', () => {
    expect(new Cmp9674Component().add9674(1)).toBe(9675);
  });
});