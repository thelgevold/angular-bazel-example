
import { Cmp2532Component } from './cmp';
describe('Cmp2532Component', () => {
  it('should add', () => {
    expect(new Cmp2532Component().add2532(1)).toBe(2533);
  });
});