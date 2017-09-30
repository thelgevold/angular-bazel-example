
import { Cmp7805Component } from './cmp';
describe('Cmp7805Component', () => {
  it('should add', () => {
    expect(new Cmp7805Component().add7805(1)).toBe(7806);
  });
});