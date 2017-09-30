
import { Cmp2064Component } from './cmp';
describe('Cmp2064Component', () => {
  it('should add', () => {
    expect(new Cmp2064Component().add2064(1)).toBe(2065);
  });
});