
import { Cmp7412Component } from './cmp';
describe('Cmp7412Component', () => {
  it('should add', () => {
    expect(new Cmp7412Component().add7412(1)).toBe(7413);
  });
});