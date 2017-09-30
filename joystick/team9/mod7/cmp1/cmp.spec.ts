
import { Cmp9971Component } from './cmp';
describe('Cmp9971Component', () => {
  it('should add', () => {
    expect(new Cmp9971Component().add9971(1)).toBe(9972);
  });
});