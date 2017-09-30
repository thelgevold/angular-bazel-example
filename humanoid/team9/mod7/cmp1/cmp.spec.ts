
import { Cmp7971Component } from './cmp';
describe('Cmp7971Component', () => {
  it('should add', () => {
    expect(new Cmp7971Component().add7971(1)).toBe(7972);
  });
});