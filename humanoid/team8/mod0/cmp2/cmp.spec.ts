
import { Cmp7802Component } from './cmp';
describe('Cmp7802Component', () => {
  it('should add', () => {
    expect(new Cmp7802Component().add7802(1)).toBe(7803);
  });
});