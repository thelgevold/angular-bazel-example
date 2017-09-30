
import { Cmp2625Component } from './cmp';
describe('Cmp2625Component', () => {
  it('should add', () => {
    expect(new Cmp2625Component().add2625(1)).toBe(2626);
  });
});