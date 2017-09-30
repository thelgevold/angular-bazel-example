
import { Cmp2339Component } from './cmp';
describe('Cmp2339Component', () => {
  it('should add', () => {
    expect(new Cmp2339Component().add2339(1)).toBe(2340);
  });
});