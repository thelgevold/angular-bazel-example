
import { Cmp2850Component } from './cmp';
describe('Cmp2850Component', () => {
  it('should add', () => {
    expect(new Cmp2850Component().add2850(1)).toBe(2851);
  });
});