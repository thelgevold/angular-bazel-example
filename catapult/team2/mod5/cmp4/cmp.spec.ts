
import { Cmp2254Component } from './cmp';
describe('Cmp2254Component', () => {
  it('should add', () => {
    expect(new Cmp2254Component().add2254(1)).toBe(2255);
  });
});