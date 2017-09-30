
import { Cmp9403Component } from './cmp';
describe('Cmp9403Component', () => {
  it('should add', () => {
    expect(new Cmp9403Component().add9403(1)).toBe(9404);
  });
});