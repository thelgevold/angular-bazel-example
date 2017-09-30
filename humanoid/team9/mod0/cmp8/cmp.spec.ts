
import { Cmp7908Component } from './cmp';
describe('Cmp7908Component', () => {
  it('should add', () => {
    expect(new Cmp7908Component().add7908(1)).toBe(7909);
  });
});