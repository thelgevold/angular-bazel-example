
import { Cmp7975Component } from './cmp';
describe('Cmp7975Component', () => {
  it('should add', () => {
    expect(new Cmp7975Component().add7975(1)).toBe(7976);
  });
});