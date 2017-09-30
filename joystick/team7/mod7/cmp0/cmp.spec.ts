
import { Cmp9770Component } from './cmp';
describe('Cmp9770Component', () => {
  it('should add', () => {
    expect(new Cmp9770Component().add9770(1)).toBe(9771);
  });
});