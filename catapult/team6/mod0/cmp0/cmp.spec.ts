
import { Cmp2600Component } from './cmp';
describe('Cmp2600Component', () => {
  it('should add', () => {
    expect(new Cmp2600Component().add2600(1)).toBe(2601);
  });
});