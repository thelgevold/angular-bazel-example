
import { Cmp2345Component } from './cmp';
describe('Cmp2345Component', () => {
  it('should add', () => {
    expect(new Cmp2345Component().add2345(1)).toBe(2346);
  });
});