
import { Cmp7096Component } from './cmp';
describe('Cmp7096Component', () => {
  it('should add', () => {
    expect(new Cmp7096Component().add7096(1)).toBe(7097);
  });
});