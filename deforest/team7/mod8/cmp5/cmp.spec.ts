
import { Cmp3785Component } from './cmp';
describe('Cmp3785Component', () => {
  it('should add', () => {
    expect(new Cmp3785Component().add3785(1)).toBe(3786);
  });
});