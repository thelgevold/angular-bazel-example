
import { Cmp2565Component } from './cmp';
describe('Cmp2565Component', () => {
  it('should add', () => {
    expect(new Cmp2565Component().add2565(1)).toBe(2566);
  });
});