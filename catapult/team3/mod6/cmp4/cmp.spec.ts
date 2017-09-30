
import { Cmp2364Component } from './cmp';
describe('Cmp2364Component', () => {
  it('should add', () => {
    expect(new Cmp2364Component().add2364(1)).toBe(2365);
  });
});