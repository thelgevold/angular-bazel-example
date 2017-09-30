
import { Cmp2822Component } from './cmp';
describe('Cmp2822Component', () => {
  it('should add', () => {
    expect(new Cmp2822Component().add2822(1)).toBe(2823);
  });
});